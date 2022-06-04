import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import LoadingSpinner from 'components/UI/LoadingSpinner';
import TextField from 'components/UI/TextField';

import { HiSearch } from 'react-icons/hi';
import { debounce } from 'utils/debounce';

interface IProps {
    setSearchKey: Dispatch<SetStateAction<string>>;
}

const ProjectSelectSearch = ({ setSearchKey }: IProps) => {
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const setLoadingOff = debounce(() => {
        setIsSearching(false);
    });

    const updateSearchKey = debounce((text) => {
        setSearchKey(text);
        setIsSearching(true);
    }, 500);

    const handleSearchProject = (event: ChangeEvent<HTMLInputElement>) => {
        updateSearchKey(event.target.value);

        setLoadingOff();
    };

    return (
        <TextField
            type="text"
            placeholder="Projects..."
            className="project-select-search mb-5"
            onChange={handleSearchProject}
            Icon={isSearching ? <LoadingSpinner size="normal" color="white" /> : <HiSearch size={18} className="mr-2" />}
        />
    );
};

export default ProjectSelectSearch;
