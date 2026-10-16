// The photo picked on the "done" screen, handed to the adjust screen without going through storage.
let pending: File | undefined

export function setPendingPhoto(file: File) {
  pending = file
}

export function peekPendingPhoto(): File | undefined {
  return pending
}

export function clearPendingPhoto() {
  pending = undefined
}
