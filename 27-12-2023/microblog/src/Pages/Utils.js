
export function getImageUrl(persontwo,size='s')
{
    return(
        'https://i.imgur.com/' +
        persontwo.imageId +
        size +
        '.jpg'
      );

}