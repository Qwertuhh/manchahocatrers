function MenuContact(){
    return (
        <div className="mt-16 text-center bg-neutral-800 text-white rounded-md p-12 flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8">
            <div className="text-left">
                <h2 className="wix-madefor-display-bold text-2xl font-bold mb-4">
                    Ready to Order?
                </h2>
                <p className="noto-serif-regular mb-6 w-1/2">
                    Email or call us to place your order or inquire about our
                    catering services.
                </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <a
                    href="tel:+919024319241"
                    className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                    <span className="ibm-plex-mono-bold">Call</span> +91
                    9024319241
                </a>
                <a
                    href="mailto:manchahocaterers@gmail.com"
                    className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                    <span className="ibm-plex-mono-bold">Email</span>{' '}
                    manchahocaterers@gmail.com
                </a>
            </div>
        </div>
    );
}

export { MenuContact };