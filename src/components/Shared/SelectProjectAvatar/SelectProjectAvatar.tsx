import Avatar from 'components/UI/Avatar';
import TextButton from 'components/UI/Button/TextButton';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { HiFolder, HiFolderOpen } from 'react-icons/hi';

const SelectProjectAvatar = () => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    const onFileDrop = useCallback((acceptedFiles: File[]) => {
        const fileUrl = URL.createObjectURL(acceptedFiles[0]);

        setSelectedFile(fileUrl);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onFileDrop,
        maxFiles: 1,
    });

    return (
        <>
            <label className="mb-2 mt-8 block">Project Avatar (optional)</label>
            {selectedFile ? (
                <div className="rounded p-4 bg-white-500 bg-opacity-10 flex flex-col items-center">
                    <div className="flex items-center justify-between w-full">
                        <Avatar avatar={selectedFile} placeholderText="Project" size="lg" />
                        <TextButton type="button" color="default">
                            Change Avatar
                        </TextButton>
                    </div>
                </div>
            ) : (
                <div className="rounded p-4 bg-white-500 bg-opacity-10 flex flex-col items-center" {...getRootProps()}>
                    {isDragActive ? <HiFolderOpen size={42} className="mb-2" /> : <HiFolder size={42} className="mb-2" />}
                    <p>Drag & drop or click to select avatar</p>
                    <input {...getInputProps()} className="hidden" />
                </div>
            )}
        </>
    );
};

export default SelectProjectAvatar;