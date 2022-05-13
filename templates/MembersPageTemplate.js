import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import Markdown from "@/components/basic/markdown/Markdown";
import CoreTeamBiography from "@/components/core-team-biography/CoreTeamBiography";

import classNames from "classnames";

import { gridAreaMembers } from "./MembersPageTemplate.module.scss";

const buttonLabel = "View More";

const MembersPageTemplate = ({ hero, text, members }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container className="mb-49px md:mb-42px">
        <div className={classNames("grid grid-cols-3 w-full", gridAreaMembers)}>
          {members &&
            members.map((member, index) => {
              return (
                <CoreTeamBiography
                  key={index}
                  image={member.picture}
                  title={member.name}
                  subtitle={member.position}
                  text={member.introduction}
                />
              );
            })}
        </div>
        <Markdown markdown={text} />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default MembersPageTemplate;
