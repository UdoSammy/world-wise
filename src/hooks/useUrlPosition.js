import { useSearchParams } from "react-router-dom";

/* eslint-disable no-unused-vars */
export function useUrlPosition() {
    const [searchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return [lat, lng]
}