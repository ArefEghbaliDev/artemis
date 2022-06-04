import Avatar from 'components/UI/Avatar';
import TextButton from 'components/UI/Button/TextButton';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { HiFolder, HiFolderOpen, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

interface IProps {
    setAvatar: (avatar: string | null) => void;
}

const SelectProjectAvatar = ({ setAvatar }: IProps) => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    const onFileDrop = useCallback((acceptedFiles: File[]) => {
        const fileUrl = URL.createObjectURL(acceptedFiles[0]);

        setSelectedFile(fileUrl);
        setAvatar(fileUrl);
    }, []);

    const handleRemoveAvatar = () => {
        setSelectedFile(null);
        setAvatar(null);
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop: onFileDrop,
        maxFiles: 1,
    });

    return (
        <>
            <label className="mb-2 mt-8 block">Project Avatar (optional)</label>
            {selectedFile ? (
                <div className="select-avatar-container">
                    <div className="flex items-center justify-between w-full">
                        <Avatar avatar={selectedFile} placeholderText="Project" size="xl" />
                        <div className="flex items-center">
                            <TextButton type="button" color="default" onClick={handleRemoveAvatar}>
                                <HiOutlineTrash size={18} className="mr-2" />
                                Remove Avatar
                            </TextButton>
                            <TextButton type="button" color="default" onClick={open}>
                                <HiOutlinePencil size={18} className="mr-2" />
                                Change Avatar
                            </TextButton>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="select-avatar-container" {...getRootProps()}>
                    {isDragActive ? <HiFolderOpen size={42} className="mb-2" /> : <HiFolder size={42} className="mb-2" />}
                    <p>Drag & drop or click to select avatar</p>
                    <input {...getInputProps()} className="hidden" />
                </div>
            )}
        </>
    );
};

export default SelectProjectAvatar;
