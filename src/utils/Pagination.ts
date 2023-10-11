
const issNumber = (value:string) => /^\d+$/.test(value);


export const getPagination =<T>(items:T[], postPerPage =1, currentPage ="1")=>{  

    if(!issNumber(currentPage))  {
        throw new Error(`Invalid number`)
      }
    
      const currentPageInt = parseInt(currentPage,10)
      const totalPost= items.length
      const totalPages=Math.ceil(totalPost/postPerPage)
      
      if(currentPageInt>totalPages || currentPageInt<1){
          throw new Error( `Page ${currentPageInt} does not exist`)
      }
      
    const offset= (currentPageInt-1) * postPerPage;
    const currentPost = items.slice(offset, offset + postPerPage);

    return {
        totalPages,
        currentPost
    }

}

