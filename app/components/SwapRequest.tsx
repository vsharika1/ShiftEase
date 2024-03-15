import * as luxon from 'ts-luxon';

interface Props {
  initiatorName: string;
  targetName: string;
  shiftInfo: {
    startTime: Date;
    endTime: Date;
  };
}

// Handle Accept action
const handleAccept = () => {
  console.log('Approved');
};

// Handle Deny action
const handleDeny = () => {
  console.log('Denied');
};

export default function SwapRequest({
  initiatorName,
  targetName,
  shiftInfo,
}: Props) {
  // Convert the start time to Luxon DateTime
  const startDateTime = luxon.DateTime.fromJSDate(shiftInfo.startTime, {
    setZone: true,
  });
  const formattedStartDate = startDateTime.toLocaleString(
    luxon.DateTime.DATE_MED,
  );
  const formattedStartTime = startDateTime.toLocaleString(
    luxon.DateTime.TIME_SIMPLE,
  );

  // Calculate the shift duration
  const endDateTime = luxon.DateTime.fromJSDate(shiftInfo.endTime, {
    setZone: true,
  });
  const shiftDuration = endDateTime.diff(startDateTime);
  const formattedDuration = luxon.Duration.fromMillis(
    shiftDuration.as('milliseconds'),
  ).toFormat("h'hr' m'm'");

  return (
    <div className="flex justify-center mt-5">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <div className="flex-grow">
              <div className="font-bold text-sm mb-2">
                {initiatorName} ↔ {targetName}
              </div>
              <div className="text-lg text-green-600 font-semibold">
                Start Date: {formattedStartDate}
                <br />
                Start Time: {formattedStartTime}
                <br />
                Duration: {formattedDuration}
              </div>
              <div className="font-bold text-sm mt-2">
                Submitted by {initiatorName}
              </div>
            </div>
            <div className="flex flex-col space-y-2 ml-10">
              <button
                onClick={handleAccept}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                ACCEPT
              </button>
              <button
                onClick={handleDeny}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                DENY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
