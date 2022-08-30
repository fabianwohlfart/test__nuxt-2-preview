export default function ({ store, query, enablePreview }) {
  if (query.preview) {
    console.log('👀 PREVIEW ENABLED')
    enablePreview()
  }
}
