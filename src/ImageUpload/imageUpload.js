export const uploadImage = async (file) => {
  if (!file) return null;
  //image file formate for image upload 
  const formData = new FormData();
  formData.append('image', file);
  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imagebb}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await response.json();
    if (data.success) {
      return data.data.url;
    }
    else {
      throw new Error('Image Up Load fail');

    }
  }
 
  catch (Error) {
      console.error(Error);
      return null
    }
    
}