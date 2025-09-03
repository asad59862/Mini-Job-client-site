import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { uploadImage } from "../ImageUpload/imageUpload";
import toast from "react-hot-toast";
import { useAuth } from "../Hook/authHook";


const UpdateProfile = () => {
  const{user, UpdateProifl}=useAuth()
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

  // Handle image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedURL = photoURL;

      // If new image selected, upload it
      if (imageFile) {
        uploadedURL = await uploadImage(imageFile);
      }

      // Call backend or Firebase function to update profile
      await UpdateProifl(  name,uploadedURL);

      toast.success("Profile updated successfully!");
      navigate("/"); // redirect to home or wherever you want
    } catch (err) {
      console.error(err);
      toast.error("Profile update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={user?.email}
            disabled
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`btn btn-primary mt-4 ${loading ? "loading" : ""}`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
