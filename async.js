let order=(time,work)=>{
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(work())
        },2000)

        reject(console.log)
    })
}