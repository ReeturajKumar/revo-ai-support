import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectionView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4">
      <h2 className="text-2xl font-semibold">Your Organizations</h2>
      <OrganizationList
        afterSelectOrganizationUrl="/"
        afterSelectPersonalUrl="/"
        hidePersonal
        skipInvitationScreen
      />
    </div>
  );
};
