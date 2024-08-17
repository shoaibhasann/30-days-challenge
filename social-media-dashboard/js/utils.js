// function to save data in localStorage
export const saveData = (key, value) => {
  if (typeof key === "string" && key.trim() !== "") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error("Invalid key provided while saving data...");
    return null;
  }
};

// function to retreive data from localStorage
export const getData = (key) => {
  if (typeof key === "string" && key.trim() !== "") {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } else {
    console.error("Invalid key provided.");
    return null;
  }
};

// function to remove data from localStorage
export const removeData = (key) => {
  if (typeof key === "string" && key.trim() !== "") {
    localStorage.removeItem(key);
  } else {
    console.error("Invalid key provided.");
    return null;
  }
};

export const getFirstChar = (username) => {
  return username.trim().charAt(0);
};

export const compressImage = (file, maxSize = 500, quality = 0.7) => {
  if (!file) {
    console.error("File not provided");
    return null;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;

        // Maintain aspect ratio
        if (width > height) {
          if (width > maxSize) {
            height *= maxSize / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width *= maxSize / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Draw image on to canvas
        context.drawImage(img, 0, 0, maxSize, maxSize);

        // convert image into baseURL 64
        const resizedImage = canvas.toDataURL("image/jpeg", quality);

        resolve(resizedImage);
      };

      img.onerror = (error) => {
        reject(error);
      };
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const showModal = (modal) => {
  modal.style.display = "flex";
}

export const closeModal = (modal) => {
  modal.style.display = "none";
}

export const getUserName = () => {
  const userProfile = getData("user-profile");
  const name = userProfile?.username;
  return name;
}
