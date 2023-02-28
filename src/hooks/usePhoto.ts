import { ChangeEvent, useEffect, useState } from 'react';

export const usePhoto = () => {
  const [file, setFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState('');

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;

    const newFiles = e.target?.files;

    if (!newFiles) return;

    setFile(newFiles[0]);
  };

  useEffect(() => {
    if (!file) return;

    const objURL = URL.createObjectURL(file);

    setPhotoPreview(objURL);
  }, [file]);

  return [photoPreview, onFileUpload];
};
