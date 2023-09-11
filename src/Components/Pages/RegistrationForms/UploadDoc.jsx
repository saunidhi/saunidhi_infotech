import React from "react";

const UploadDoc = () => {
  return (
    <>
      <div>
        {/* First Block */}

        <h2 className="w-[196px] text-amber-500 text-[22px] font-normal leading-7 mt-20 ml-10">
          Upload Documents
        </h2>
        {/* <hr className="w-[20px]" /> */}

        {/* Instructions block */}
        <h3 className="w-[323px] text-red-600 text-sm font-normal leading-7 mt-20 ml-10">
          Instruction for Uploading Image and Documents –
        </h3>

        <h4 className="w-[389px] text-red-600 text-[13px] font-normal leading-7 mt-3 ml-10">
          Photo and Documents are required in .jpg or .jpeg image format.
        </h4>

        {/* Select File button */}

        <h4 className="w-[333px] text-red-600 text-sm font-normal leading-7 ml-10">
          File size of photo must be within 10kb to 200kb limit.
        </h4>

        {/* Select File button */}

        <h4 className="w-[351px] text-red-600 text-[13px] font-normal leading-7 ml-10">
          File size of Documents must be within 600Kb to 2Mb limit.
        </h4>

        {/* Select File button */}
      </div>

      {/* Candidate Photo Block  */}

      <div>
        <h4 className="w-[317px] text-neutral-800 text-[13px] font-normal leading-[21.12px] mt-16 ml-10">
          Candidate's Photograph (with 80% face without mask)
        </h4>

        <h5 className="w-[155px] text-indigo-500 text-xs font-normal leading-[21.12px] ml-10">
          Accepted formats .jpeg, .jpg
        </h5>

        <h4 className="w-[201px] text-neutral-800 text-xs font-normal leading-[21.12px] mt-8 ml-10">
          Candidate's Government issued ID{" "}
        </h4>

        <h5 className="w-[155px] text-indigo-500 text-xs font-normal leading-[21.12px] ml-10">
          Accepted formats .jpeg, .jpg
        </h5>

        <h4 className="w-[201px] text-neutral-800 text-xs font-normal leading-[21.12px] mt-8 ml-10">
          Candidate's Last year Marksheet
        </h4>

        <h5 className="w-[155px] text-indigo-500 text-xs font-normal leading-[21.12px] ml-10">
          Accepted formats .jpeg, .jpg{" "}
        </h5>
      </div>

      {/* Button for Previous section */}
      <div className="bg-red-700">
        <button className="w-[122px] text-center text-white text-base font-normal leading-tight">
          Previous Section{" "}
        </button>
        <button className="w-[200px] text-center text-white text-base font-normal leading-tight">
          Proceed to Preview Section
        </button>
      </div>
    </>
  );
};

export default UploadDoc;
