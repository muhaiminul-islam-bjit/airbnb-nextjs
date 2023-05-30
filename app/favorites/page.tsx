import React from "react";
import ClinetOnly from "../components/ClinetOnly";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClinetOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClinetOnly>
    );
  }

  return (
    <ClinetOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClinetOnly>
  );
};

export default ListingPage;
