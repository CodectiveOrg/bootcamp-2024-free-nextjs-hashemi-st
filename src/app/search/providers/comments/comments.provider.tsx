import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";
import { Comments } from "@/models/doctor.model";

interface CommentContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredComments: Comments[];
  filterVisitedStatus: boolean | null;
  setFilterVisitedStatus: (value: boolean | null) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
}

export const CommentContext = createContext<CommentContextType>({
  searchValue: "",
  setSearchValue: () => { },
  filteredComments: [],
  filterVisitedStatus: true,
  setFilterVisitedStatus: () => { },
  sortOrder: "asc",
  setSortOrder: () => { }

});

type Props = PropsWithChildren<{
  comments: Comments[];
}>;

export const CommentsProvider = ({ children, comments }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterVisitedStatus, setFilterVisitedStatus] = useState<boolean | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredComments = useMemo(() => {
    return comments
      .filter((comment) =>
        comment.comment.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter((comment) =>
        filterVisitedStatus === null ? true : comment.visited === filterVisitedStatus
      )
      .sort((a, b) => (sortOrder === "asc" ? a.point - b.point : b.point - a.point));
  }, [searchValue, filterVisitedStatus, sortOrder, comments]);

  return (
    <CommentContext.Provider
      value={{
        sortOrder,
        setSortOrder,
        searchValue,
        setSearchValue,
        filteredComments,
        filterVisitedStatus,
        setFilterVisitedStatus,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
export const useComment = () => useContext(CommentContext);
