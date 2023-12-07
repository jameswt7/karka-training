async function fun()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10)
            console.log("start")},3000)   
        
    })
}
fun()
async function myfun(){
    const result = await fun()
    console.log(result)
    console.log("completed")

}
myfun()