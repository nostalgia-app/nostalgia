import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommunity, setCommunities } from "../store";

const Communities = () => {
  const { communities } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  return (
    <div>
      <h1>Communities</h1>
      {/* <div>{communities.map(community => <div></div>)}</div> */}
    </div>
  );
};

export default Communities;
