export const goToLogin = (history) => {
    history.push('/')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToCreatePost = (history) => {
    history.push('/create-post')
}

export const goToPost = (history,id) => {
    history.push(`/post/${id}`)
}

export const goToSignUp = (history) => {
    history.push('/signUp')
}