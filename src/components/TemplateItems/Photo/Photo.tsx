import { FC } from 'react';

import previewIcon from '@assets/images/photoPreview.svg';

import { usePhoto } from '@hooks';

import style from './Photo.module.scss';

export const Photo: FC = () => {
  const [photoPreview, onFileUpload] = usePhoto();

  return (
    <div className={style.photo_container}>
      <input
        type="file"
        id="photo"
        onChange={onFileUpload}
        value=""
        className={style.file_input}
      />

      <label
        htmlFor="photo"
        className={style.file_label}
      >
        {photoPreview ? (
          <img
            src={photoPreview}
            alt="CV profile"
            className={style.photo}
          />
        ) : (
          <img
            src={previewIcon}
            alt="camera"
            className={style.photo_preview}
          />
        )}
      </label>
    </div>
  );
};
