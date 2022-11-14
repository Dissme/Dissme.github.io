/**
 * 注意!!!!!!!!!!
 * 从webpack源码里cv大法来的target:webworker的部分 我只是开了个chidcompiler跑一下
 * 有两个问题 1.公共代码也被打包进来了 2.hmr不触发
 * 如果不是为了在同一个项目写demo方便的话 直接打包成webworker文件 用模块联邦引入公共代码体积会小的多
 */

const path = require('path');
const WebWorkerTemplatePlugin = require('webpack/lib/webworker/WebWorkerTemplatePlugin');
const FetchCompileWasmPlugin = require('webpack/lib/web/FetchCompileWasmPlugin');
const FetchCompileAsyncWasmPlugin = require('webpack/lib/web/FetchCompileAsyncWasmPlugin');
const NodeSourcePlugin = require('webpack/lib/node/NodeSourcePlugin');
const StartupChunkDependenciesPlugin = require('webpack/lib/runtime/StartupChunkDependenciesPlugin');
const LoaderTargetPlugin = require('webpack/lib/LoaderTargetPlugin');
const EntryPlugin = require('webpack/lib/EntryPlugin');

function loader() {}

function pitch(request) {
  this.cacheable(false);
  const callback = this.async();
  const parentCompiler = this._compiler;
  const parentCompliation = this._compilation;
  const cache = parentCompiler.getCache('worker-loader');
  const options = parentCompiler.options;
  const { output } = options;
  const entryName = path.relative(process.cwd(), this.resourcePath).split(/\/\./).join('_');
  const compiler = parentCompliation.createChildCompiler(
    `worker-loader ${request}`,
    {
      ...output,
      globalObject: 'self',
    },
    [
      new WebWorkerTemplatePlugin(),
      new FetchCompileWasmPlugin({
        mangleImports: options.optimization.mangleWasmImports,
      }),
      new FetchCompileAsyncWasmPlugin(),
      new NodeSourcePlugin(options.node),
      new LoaderTargetPlugin('webworker'),
      new StartupChunkDependenciesPlugin({
        asyncChunkLoading: true,
      }),
      new EntryPlugin(this.context, `!!${request}`, entryName),
    ],
  );

  compiler.runAsChild((error, entries, compilation) => {
    if (error) {
      return callback(error);
    }
    const [workerFilename] = entries[0].files;
    const cacheIdent = workerFilename;
    const cacheETag = cache.getLazyHashedEtag(compilation.assets[workerFilename]);

    cache.get(cacheIdent, cacheETag, (getCacheError, content) => {
      if (getCacheError) {
        return callback(getCacheError);
      }
      if (content) return callback(null, content);
      content = Buffer.from(
        `export const url = __webpack_public_path__ + ${JSON.stringify(workerFilename)}`,
      );
      return cache.store(cacheIdent, cacheETag, content, (storeCacheError) => {
        if (storeCacheError) {
          return callback(storeCacheError);
        }
        return callback(null, content);
      });
    });
  });
}

loader.pitch = pitch;

module.exports = loader;
