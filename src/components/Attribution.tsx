interface AttributionProps {
  theme: string;
}

function Attribution({ theme }: AttributionProps) {
  return (
    <div className={"attribution attribution-" + theme}>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a>
      . Coded by <a href="#">@sortaships</a>.
    </div>
  );
}

export default Attribution;
