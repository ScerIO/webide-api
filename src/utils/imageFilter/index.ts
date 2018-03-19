export default function imageFilter(fileName: string): boolean {
  return fileName.match(/\.(jpg|jpeg|png|gif)$/) !== null
}
