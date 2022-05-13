import MembersPageTemplate from "@/templates/MembersPageTemplate";

import { getData } from "@/utils/api";

const LegalTaskForcePage = ({ hero, text, members }) => {
  return <MembersPageTemplate hero={hero} text={text} members={members} />;
};

export async function getStaticProps() {
  const pageData = await getData("/legal-task-force");
  const membersData = await getData("/legal-team-members");

  if (pageData == null && membersData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.introduction,
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
      members: membersData
        ? membersData
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((member) => ({
              name: member.name,
              position: member.resq_position,
              introduction: member.summary,
              picture: {
                id: member.profile_picture.id,
                alternativeText: member.profile_picture.alternativeText,
                mime: member.profile_picture.mime,
                width: member.profile_picture.width,
                height: member.profile_picture.height,
                url: member.profile_picture.url,
              },
            }))
        : null,
    },
  };
}

export default LegalTaskForcePage;
