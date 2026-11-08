"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useState } from "react";

type UserAvatarProps = {
    image?: string | null;
    size?: number;
};

export function UserAvatar({ image, size = 36 }: UserAvatarProps) {
    const [failedImage, setFailedImage] = useState<string | null>(null);
    const validImage = image?.startsWith("/") || /^https?:\/\//.test(image ?? "");

    if (image && validImage && image !== failedImage) {
        return (
            <Image
                src={image}
                alt=""
                width={size}
                height={size}
                unoptimized
                onError={() => setFailedImage(image)}
                className="shrink-0 rounded-full object-cover"
                style={{ width: size, height: size }}
            />
        );
    }

    return (
        <span
            className="grid shrink-0 place-items-center rounded-full bg-green-100 text-green-800"
            style={{ width: size, height: size }}
        >
            <UserRound size={size / 2} />
        </span>
    );
}
