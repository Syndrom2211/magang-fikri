import "../style/main.css"

// eslint-disable-next-line react/prop-types
const SoundCloudPlayer = ({ embedUrl }) => {
  return (
    <div className="soundcloud-player">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;