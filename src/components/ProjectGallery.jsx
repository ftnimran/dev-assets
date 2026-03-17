import ProjectItems from "../data/ProjectItems";
import Card from "./Card";

const ProjectGallery = () => {
  return (
    <div className="p-10 max-w-300 mx-auto">
      <h2>My Project Images</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6.25">
        {ProjectItems.map((p) => (
          <Card key={p.id} cardItems={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
