import './Sidebar.css'
interface Props {
    toggle: boolean;
    page:string;
    currentPage:string;
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>;
  }

const NavigationBubble: React.FC<Props> = ({ toggle , page, currentPage, setCurrentPage}) => {
    // const [currentPage, setCurrentPage] = useState('Clipping');

    const selectPage =():void =>{
        setCurrentPage(page);
        console.log(currentPage);
        
    }

    return (
        <>
            <div  id={page} className={`NavIconWrap ${toggle ? 'NavIconWrap--toggled' : ''} ${currentPage==page ? 'currentPageWrap' : ''}`} onClick={selectPage}>
            {page == 'Clipping' ? (
                <svg fill='white' className={`NavIcon ${currentPage==page ? 'currentPageIcon' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ): page == 'Format' ?(
                <svg fill='white' className={`NavIcon ${currentPage==page ? 'currentPageIcon' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V7C19 7.55228 19.4477 8 20 8C20.5523 8 21 7.55228 21 7V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM22.1213 10.7071C20.9497 9.53553 19.0503 9.53553 17.8787 10.7071L16.1989 12.3869L11.2929 17.2929C11.1647 17.4211 11.0738 17.5816 11.0299 17.7575L10.0299 21.7575C9.94466 22.0982 10.0445 22.4587 10.2929 22.7071C10.5413 22.9555 10.9018 23.0553 11.2425 22.9701L15.2425 21.9701C15.4184 21.9262 15.5789 21.8353 15.7071 21.7071L20.5556 16.8586L22.2929 15.1213C23.4645 13.9497 23.4645 12.0503 22.2929 10.8787L22.1213 10.7071ZM18.3068 13.1074L19.2929 12.1213C19.6834 11.7308 20.3166 11.7308 20.7071 12.1213L20.8787 12.2929C21.2692 12.6834 21.2692 13.3166 20.8787 13.7071L19.8622 14.7236L18.3068 13.1074ZM16.8923 14.5219L18.4477 16.1381L14.4888 20.097L12.3744 20.6256L12.903 18.5112L16.8923 14.5219Z" />
                </svg>
            ): (
                <svg fill='white' viewBox="0 0 1024 1024" className={`NavIcon ${currentPage==page ? 'currentPageIcon' : ''}`}  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M182.99 146.2h585.14v402.29h73.14V73.06H109.84v877.71H512v-73.14H182.99z"  /><path d="M256.13 219.34h438.86v73.14H256.13zM256.13 365.63h365.71v73.14H256.13zM256.13 511.91h219.43v73.14H256.13zM731.55 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86c100.99 0 182.86-81.87 182.86-182.86s-81.86-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0.01 60.49-49.21 109.71-109.71 109.71z"  /><path d="M758.99 692.08h-54.86v87.27l69.39 68.76 38.61-38.96-53.14-52.66z"  /></svg>
            )}
                
                <h2 className={`NavText ${toggle ? 'NavText--toggled' : ''} ${currentPage==page ? 'currentPageText' : ''}` }>{page}</h2>
            </div>
            
        </>
    )
}
  
export default NavigationBubble
