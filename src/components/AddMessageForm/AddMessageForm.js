const AddMessageForm = (props) => {
    return (
        <form className="add-message">
            <input
                className="new-message"
                value={props.text}
                onChange={props.handleChange}
                placeholder='Write your message'
                ref={props.inputRef} />
            <button className="add-file">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.15">
                        <path d="M21 11.4385L12.8446 19.4644C11.8455 20.4477 10.4904 21.0001 9.07749 21.0001C7.66455 21.0001 6.30948 20.4477 5.31039 19.4644C4.31129 18.4812 3.75 17.1476 3.75 15.7571C3.75 14.3666 4.31129 13.033 5.31039 12.0498L13.4658 4.02381C14.1319 3.36831 15.0352 3.00006 15.9772 3.00006C16.9192 3.00006 17.8225 3.36831 18.4886 4.02381C19.1547 4.67931 19.5289 5.56835 19.5289 6.49536C19.5289 7.42237 19.1547 8.31141 18.4886 8.96691L10.3243 16.9929C9.99129 17.3206 9.5396 17.5048 9.06862 17.5048C8.59764 17.5048 8.14595 17.3206 7.81291 16.9929C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2936 7.47988 14.8491 7.81291 14.5213L15.3471 7.11543" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </button>
            <button
                className="send-message"
                type="button"
                onClick={props.handleSubmit}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6.10352e-05" width="32" height="32" rx="4" fill="url(#paint0_linear)" />
                    <g clipPath="url(#clip0)">
                        <path d="M21.6668 10.3334L14.3335 17.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.6668 10.3334L17.0002 23.6667L14.3335 17.6667L8.3335 15L21.6668 10.3334Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear" x1="16" y1="6.10352e-05" x2="16" y2="32.0001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0077B5" />
                            <stop offset="1" stopColor="#0E6795" />
                        </linearGradient>
                        <clipPath id="clip0">
                            <rect width="16" height="16" fill="white" transform="translate(7 9.00006)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </form>
    );
}

export default AddMessageForm;