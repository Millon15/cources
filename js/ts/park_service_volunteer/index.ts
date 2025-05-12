import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteersData,
} from "./raccoon-meadows-log";

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteersData,
} from "./wolf-point-log";

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;
type CombinedVolunteers = RaccoonMeadowsVolunteers | WolfPointVolunteers;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

type VolunteersHours = {
  id: number;
  name: string;
  hours: number;
};

function combineVolunteers(volunteers: CombinedVolunteers[]): Volunteers[] {
  return volunteers.map((volunteer: CombinedVolunteers): Volunteers => {
    return {
      id:
        typeof volunteer.id !== "number" // instanceof WolfPointVolunteers
          ? parseInt(String(volunteer.id), 10) || 0
          : volunteer.id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
}

function isVerified(verified: string | boolean): boolean {
  if (typeof verified === "string") {
    return verified.toLowerCase() === "yes";
  }

  return verified;
}

function getHours(activity: CombinedActivity): number {
  if ("hours" in activity) {
    return activity.hours;
  }

  return activity.time;
}

function calculateHours(volunteers: Volunteers[]): VolunteersHours[] {
  return volunteers.map((volunteer: Volunteers): VolunteersHours => {
    let hours = 0;

    volunteer.activities.forEach((activity: CombinedActivity): void => {
      if (isVerified(activity.verified)) {
        hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

function byHours(a: VolunteersHours, b: VolunteersHours) {
  return b.hours - a.hours;
}

const combinedVolunteers = combineVolunteers(
  [...wolfPointVolunteersData, ...raccoonMeadowsVolunteersData] as CombinedVolunteers[]
);

console.log(calculateHours(combinedVolunteers).sort(byHours));
