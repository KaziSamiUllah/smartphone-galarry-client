import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    return (
        <div className='flex text-black my-10 '>
            <input placeholder='Search products' className='bg-slate-200 rounded-full px-5  text-2xl' type="text" />
            <button className='-translate-x-12 flex justify-center items-center m-3 text-2xl'>
            <FaSearch />
            </button>
        </div>
    );
};

export default Searchbar;