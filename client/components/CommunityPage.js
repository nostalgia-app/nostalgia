import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCommunity } from "../store";
import { useParams } from "react-router-dom";

const CommunityPage = () => {
  const { id } = useParams();
  const { community } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommunity(id));
  }, [id]);

  return (
    <div>
      <h3>{community.name}</h3>
      <h5>{community.bio}</h5>
      <img id="communityCardImg" src={community.imageUrl} />
    </div>
  );
};

export default CommunityPage;
