import { defineConfig } from '@rsbuild/core'

const entryName = process.env.ENTRY_NAME

const entries = {
  maze: ['./src/maze/index.js', './src/common/common.js'],
  sample: ['./src/sample/sample.js', './src/common/common.js']
}

const templates = {
  maze: './src/maze/index.html',
  sample: './src/sample/sample.html'
}

export default defineConfig({
  output: {
    assetPrefix: './'
  },
  source: {
    entry: entryName ? { [entryName]: entries[entryName] } : entries
  },
  html: {
    mountId: 'app',
    template({ entryName }) {
      return templates[entryName]
    }
  }
  // HTML파일 변경 시 재빌드가 빌드 후 단 한번만 실행되는 문제.. 임시로 nodemon 사용중
  //   dev: {
  //     watchFiles: {
  //       type: 'reload-page',
  //       paths: 'src/**/*.html',
  //       options: {
  //         usePolling: true
  //       }
  //     }
  //   }
})
