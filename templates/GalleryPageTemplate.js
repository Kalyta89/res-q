import PageLayout from "@/layouts/PageLayout";
import PageLinkTile from "@/components/page-link-tile/PageLinkTile";

import { gridTiles } from "@/components/page-link-tile/PageLinkTile.module.scss";

const GalleryPageTemplate = ({ hero, tiles }) => {
  return (
    <PageLayout hero={hero}>
      <div className={gridTiles}>
        {tiles.map((tile, index) => (
          <PageLinkTile key={index} tileText={tile.label} linkTo={tile.link} image={tile.image} />
        ))}
      </div>
    </PageLayout>
  );
};

export default GalleryPageTemplate;
