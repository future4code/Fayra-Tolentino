export const goToLogin = (history) => {
    history.push('/')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToCreatePost = (history,id) => {
    history.push(`/createPost/${id}`)
}

export const goToSignUp = (history) => {
    history.push('/sign-up')
}
