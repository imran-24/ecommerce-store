'use client'
import usePreviewModal from "@/hooks/usePreviewModal";
import Modal from "./ui/modal";
import Gallery from "./gallery/gallery";
import Info from "./info";
 
const PreviewModal = () => {
    const previewModal = usePreviewModal()
    const data = usePreviewModal(state => state.data)

    if(!data) return null;

    return ( 
        <Modal 
        isOpen={previewModal.isOpen}
        onClose={previewModal.onClose}
        >
            <div className="grid grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                <Gallery images={data.images}  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                <Info data={data} />
                </div>
            </div>
        </Modal>
     );
}
 
export default PreviewModal;