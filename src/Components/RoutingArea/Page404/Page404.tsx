import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404 ">
            <h1> Page Not Found</h1>
            <iframe className="rounded mx-auto d-block"
                width="560"
                height="315"
                // src="https://www.youtube.com/embed/NUYvbT6vTPs"
                src="https://youtu.be/RKfwKBpfhBM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

        </div>
    );
}

export default Page404;
