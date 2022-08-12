export const customFetch = ({id, image, name, type, _callback }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id, image, name, type, _callback })
        }, 2000)
    })
} 