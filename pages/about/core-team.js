import MembersPageTemplate from "@/templates/MembersPageTemplate";

import { getData } from "@/utils/api";

const CoreTeamPage = ({ hero, text, members }) => {
  return <MembersPageTemplate hero={hero} text={text} members={members} />;
};

export async function getStaticProps() {
  const pageData = await getData("/res-q-core-team");
  
  if (pageData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.text,
      hero: {
        title: pageData.title,
        image: {
          id: pageData.jumbotron_desktop.id,
          mime: pageData.jumbotron_desktop.mime,
          url: pageData.jumbotron_desktop.url,
        },
        imageMobile: {
          id: pageData.jumbotron_mobile.id,
          mime: pageData.jumbotron_mobile.mime,
          url: pageData.jumbotron_mobile.url,
        },
      },
      members: pageData.core_team_members
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((member) => ({
          name: member.name,
          position: member.position,
          introduction: member.introduction,
          picture: {
            id: member.picture.id,
            alternativeText: member.picture.alternativeText,
            mime: member.picture.mime,
            width: member.picture.width,
            height: member.picture.height,
            url: member.picture.url,
          },
        })),
    },
  };
}

export default CoreTeamPage;
