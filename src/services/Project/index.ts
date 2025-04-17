"use server"

export const getAllProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
            next: {
                revalidate: 30,
                tags: ["PROJECT"]
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getFeaturedProject = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/featured-project`, {
            next: {
                revalidate: 30,
                tags: ["PROJECT"]
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getProjectById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`, {
            cache: "no-store",
            next: {
                tags: ["PROJECT"]
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}