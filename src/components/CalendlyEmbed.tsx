import Script from 'next/script'

const CalendlyEmbed = ({ url }: { url: string }) => {
    return (
        <>
            <div
                className="calendly-inline-widget"
                data-url={url}
                style={{ height: "100%", width: "100%" }}
            ></div>
            <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </>
    );
};

export default CalendlyEmbed;