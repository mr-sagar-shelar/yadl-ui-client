import * as AWSIcons from "yadl-aws-icons";
import { AwsIconNames } from "yadl-aws-icons";
import * as AzureIcons from "yadl-azure-icons";
import { AzureIconNames } from "yadl-azure-icons";
import * as GCPIcons from "yadl-gcp-icons";
import { GCPIconNames } from "yadl-gcp-icons";
import * as SkillIcons from "yadl-skill-icons";
import { SkillIconNames  } from "yadl-skill-icons";
import * as ThemeisleIcons from "yadl-themeisle-icons";
import { ThemeisleIconNames } from "yadl-themeisle-icons";
import * as UndrawIcons from "yadl-undraw-icons";
import { UndrawIconNames } from "yadl-undraw-icons";
import { Preview } from "yadl-preview";
import React from "react";

function YadlIcons() {
  // console.log(` AWS Count = ${Object.keys(AwsIconNames).length}`)
  // console.log(` AzureIconNames Count = ${Object.keys(AzureIconNames).length}`)
  // console.log(` GCPIconNames Count = ${Object.keys(GCPIconNames).length}`)
  // console.log(` SkillIconNames Count = ${Object.keys(SkillIconNames).length}`)
  // console.log(` ThemeisleIconNames Count = ${Object.keys(ThemeisleIconNames).length}`)
  // console.log(` UndrawIconNames Count = ${Object.keys(UndrawIconNames).length}`)
  const AWSIcon = AWSIcons[AwsIconNames["aWSAppIntegrationAPIGateway"].icon];
  const AzureIcon = AzureIcons[AzureIconNames["azureAiMachineLearningBatchAI"].icon];
  const GcpIcon = GCPIcons[GCPIconNames["gCPAdministration"].icon];
  const SkillIcon = SkillIcons[SkillIconNames["skillIconAbleton"].icon];
  const ThemeisleIcon = ThemeisleIcons[ThemeisleIconNames["themeisle1"].icon];
  const UndrawIcon = UndrawIcons[UndrawIconNames["undrawPhoneCall"].icon];

  return (
    <div>
      <AWSIcon width={100} height={100} />
      <AzureIcon width={100} height={100} />
      <GcpIcon width={100} height={100} />
      <SkillIcon width={100} height={100} />
      <ThemeisleIcon width={500} height={500} />
      <UndrawIcon width={500} height={500} />
    </div>
  );
}

export default YadlIcons;
