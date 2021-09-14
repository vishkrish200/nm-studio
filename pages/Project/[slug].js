import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import Arrow from "../../components/Arrow";
import { useState } from "react";

const Page = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ProjectHero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectTitle = styled.div`
  margin-top: 10%;
  color: white;
  font-size: 10rem;
  text-align: center;
`;

const ProjectSubtitle = styled.div`
  width: 100%;
  color: white;
  text-align: center;
`;

const ProjectDescription = styled.div`
  margin: 5% 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const PictureGallery = styled.div`
  width: auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  margin: 5% auto;
  row-gap: 1.75%;
  column-gap: 3%;
  grid-auto-flow: row;
  overflow-y: auto;
`;

const Picture = styled.div`
  grid-row: ${({ pictureIndex }) =>
    pictureIndex % 3 == 0 ? "span 2 /span 2" : "span 1/ span 1"};
  order: ${({ index, pictureIndex }) =>
    index % 2 == 0 && pictureIndex % 3 != 0 ? "9999" : "-9999"};
  @media (max-width: 768px) {
    grid-row: span 1 / span 1;
    width: 200px;
  }
  min-width: 500px;
  min-height: 300px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function ProjectPage({ project, categories }) {
  const HeroImage = getStrapiMedia(project.Thumbnail);
  const descrip = [];
  var tempIndex = 0;
  var [textState, setTextState] = useState();
  function textRows() {
    project.TextRow.map((textfield, textState) => {
      descrip.push(
        <ProjectDescription>{textfield.Description}</ProjectDescription>
      );
    });
  }
  return (
    <>
      <Page>
        <Navigation categories={categories} />
        <ProjectHero imageUrl={HeroImage}>
          <ProjectTitle>{project.Title}</ProjectTitle>
          <ProjectSubtitle>{project.SubTitle}</ProjectSubtitle>
          <Arrow marginTop={"10%"} />
        </ProjectHero>
        <Gallery>
          <PictureGallery>
            {project.Gallery.map((picture, index) => {
              {
                if (index == 0 || (index + 1) % 3 == 0) {
                  return descrip[tempIndex++];
                }
              }
              return (
                <>
                  <Item
                    original={getStrapiMedia(picture)}
                    thumbnail={getStrapiMedia(picture.formats.thumbnail)}
                    width={picture.width}
                    height={picture.height}
                  >
                    {({ ref, open }) => (
                      <Picture
                        ref={ref}
                        onClick={open}
                        index={index / 3}
                        pictureIndex={index}
                        image={getStrapiMedia(picture)}
                      >
                        {index}
                      </Picture>
                    )}
                  </Item>
                </>
              );
            })}
          </PictureGallery>
        </Gallery>
      </Page>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = (await fetchAPI(`/projects?slug=${params.slug}`))[0];
  return {
    props: {
      project,
    },
  };
}

{
  /* <Gallery>
  {project.TextRow.map((textfield, index) => (
    <>
      <ProjectDescription>{textfield.Description}</ProjectDescription>(
      <PictureGallery>
        {project.Gallery &&
          project.Gallery.slice(
            index * 3,
            index * 3 + 3 > project.Gallery.length
              ? project.Gallery.length
              : index * 3 + 3
          ).map((picture, pictureIndex) => {
            tIndex = index;
            return (
              <Item
                original={getStrapiMedia(picture)}
                thumbnail={getStrapiMedia(picture.formats.thumbnail)}
                width={picture.width}
                height={picture.height}
                key={picture.name}
              >
                {({ ref, open }) => (
                  <Picture
                    index={index}
                    pictureIndex={pictureIndex}
                    image={getStrapiMedia(picture)}
                    ref={ref}
                    onClick={open}
                  ></Picture>
                )}
              </Item>
            );
          })}
      </PictureGallery>
      )
    </>
  ))}
</Gallery>; */
}
// {
//    {project.Gallery.length > (tIndex + 1) * 3
//           ? project.Gallery &&
//             project.Gallery.map((item, index) => {
//               project.Gallery &&
//                 project.Gallery.map((item, index) => {
//               roi((index + 1) * 3, tIndex, project.Gallery.length);
//               return { restOfImages };
//               if (index < (project.Gallery.length - (tIndex + 1) * 3) / 3 + 1) {
//                 {
//                   project.Gallery.slice(
//                     (tIndex + 1) * 3,
//                     project.Gallery.length
//                   ).map((picture, pictureIndex) => {
//                     return (
//                       <>
//                         <Gallery>
//                           <PictureGallery>
//                             <Item
//                               original={getStrapiMedia(picture)}
//                               thumbnail={getStrapiMedia(
//                                 picture.formats.thumbnail
//                               )}
//                               width={picture.width}
//                               height={picture.height}
//                             >
//                               {({ ref, open }) => (
//                                 <Picture
//                                   ref={ref}
//                                   onClick={open}
//                                   index={tIndex + 1}
//                                   pictureIndex={pictureIndex}
//                                   image={getStrapiMedia(picture)}
//                                 ></Picture>
//                               )}
//                             </Item>
//                           </PictureGallery>
//                         </Gallery>
//                       </>
//                     );
//                   });
//                 }
//               }
//             })
//           : null}
// }

// var restOfImages = [];
// function roi(index, tIndex, length) {
//   if (index < (length - (tIndex + 1) * 3) / 3 + 1) {
//     <>
//       {project.Gallery.slice((tIndex + 1) * 3, length).map(
//         (picture, pictureIndex) => {
//           restOfImages.push(
//             <>
//               <Gallery>
//                 <PictureGallery>
//                   <Item
//                     original={getStrapiMedia(picture)}
//                     thumbnail={getStrapiMedia(picture.formats.thumbnail)}
//                     width={picture.width}
//                     height={picture.height}
//                   >
//                     {({ ref, open }) => (
//                       <Picture
//                         ref={ref}
//                         onClick={open}
//                         index={tIndex + 1}
//                         pictureIndex={pictureIndex}
//                         image={getStrapiMedia(picture)}
//                       />
//                     )}
//                   </Item>
//                 </PictureGallery>
//               </Gallery>
//             </>
//           );
//         }
//       )}
//     </>;
//   }
// }
