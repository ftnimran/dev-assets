import BackgroundItems from "../data/BackgroundItems";
import Card from "./Card";

const BackgroundGallery = () => {
  return (
    <div className="p-10 max-w-300 mx-auto">
      <h2>My Background Images</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6.25">
        {BackgroundItems.map((b) => (
          <Card key={b.id} cardItems={b} />
        ))}
      </div>
    </div>
  );
};

export default BackgroundGallery;
