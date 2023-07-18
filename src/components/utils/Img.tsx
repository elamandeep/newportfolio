import { AspectRatio } from "@/components/ui/aspect-ratio";
import { urlForImage } from "@/utils/urlForImage";

export const Img = ({ image, slug }: { image: string, slug?: string }) => {

    if (slug !== "umaskitchen-app") {

        return (
            <>

                <div className="border p-2 md:p-6 flex w-full h-1/2 justify-center rounded-lg">
                    <div className="w-full">
                        <img
                            src={urlForImage(image).url()}
                            alt="image"
                            className="rounded-lg object-contain w-full h-full"
                        />
                    </div>
                </div>

            </>
        )

    }
    else {
        return (
            <>
                <div className="border p-2  flex h-1/2 justify-center rounded-lg">
                    <div className="w-80">
                        <img
                            src={urlForImage(image).url()}
                            alt="image"
                            className="rounded-lg object-contain w-full h-full"
                        />
                    </div>
                </div>

            </>
        )
    }
}