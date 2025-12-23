import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getImageBaseUrl, getNoImageUrl } from "@/utils/imageUtils";
import { POPUP_API } from "@/constants/apiConstants";
import { useApiMutation } from "@/hooks/useApiMutation";
import ImageCell from "@/components/common/ImageCell";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const PopupEdit = ({ isOpen, onClose, popupId, imageBaseUrl, noImageUrl }) => {
  const [popupData, setPopupData] = useState(null);

  const { trigger: fetchPopup, loading } = useApiMutation();

  useEffect(() => {
    if (isOpen && popupId) {
      fetchPopup({ url: `${POPUP_API.byId(popupId)}` })
        .then((res) => setPopupData(res.data))
        .catch(() => setPopupData(null));
    }
  }, [isOpen, popupId]);

  const handleSave = () => {
    console.log(popupData);
    onClose();
  };

  if (!popupData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Popup</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <ImageCell
              src={
                popupData.popup_image
                  ? `${imageBaseUrl}${popupData.popup_image}`
                  : noImageUrl
              }
              fallback={noImageUrl}
              alt={popupData.popup_image_alt || "Popup Image"}
              width={150}
              height={80}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Alt Text</label>
            <Input
              value={popupData.popup_image_alt || ""}
              onChange={(e) =>
                setPopupData({ ...popupData, popup_image_alt: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Required</label>
            <Select
              value={popupData.popup_required || "Yes"}
              onValueChange={(value) =>
                setPopupData({ ...popupData, popup_required: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Required" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Heading</label>
            <Input
              value={popupData.popup_heading || ""}
              onChange={(e) =>
                setPopupData({ ...popupData, popup_heading: e.target.value })
              }
            />
          </div>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupEdit;
