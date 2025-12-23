import { useQuery } from "@tanstack/react-query";
import apiClient from "@/api/apiClient";
import DataTable from "@/components/common/DataTable";
import { POPUP_API } from "@/constants/apiConstants";
import { useGetApiMutation } from "@/hooks/useGetApiMutation";
import ImageCell from "@/components/common/ImageCell";
import { getImageBaseUrl, getNoImageUrl } from "@/utils/imageUtils";

const PopupList = () => {
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["popups"],
  //     queryFn: async () => {
  //       const res = await apiClient.get(POPUP_API.list);
  //       return res.data.data;
  //     },
  //   });
  const {
    data: data,
    isLoading,
    isError,
    refetch,
  } = useGetApiMutation({
    url: POPUP_API.list,
    queryKey: ["popups"],
  });
  const IMAGE_FOR = "Popup";
  const popupBaseUrl = getImageBaseUrl(data?.image_url, IMAGE_FOR);
  const noImageUrl = getNoImageUrl(data?.image_url);
  const columns = [
    {
      header: "Image",
      accessorKey: "popup_image",
      cell: ({ row }) => {
        const fileName = row.original.popup_image;

        const src = fileName ? `${popupBaseUrl}${fileName}` : noImageUrl;

        return (
          <ImageCell
            src={src}
            fallback={noImageUrl}
            alt={`${IMAGE_FOR} Image`}
          />
        );
      },
    },
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Page One Name",
      accessorKey: "page_one_name",
    },

    {
      header: "Required",
      accessorKey: "popup_required",
    },
    {
      header: "Heading",
      accessorKey: "popup_heading",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span className="capitalize">{row.original.status}</span>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading popups</div>;

  return (
    <DataTable
      data={data?.data || []}
      columns={columns}
      pageSize={10}
      searchPlaceholder="Search popups..."
    />
  );
};

export default PopupList;
