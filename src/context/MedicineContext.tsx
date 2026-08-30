import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import type { Medicine } from "@/types/medicine";
import { medicineService } from "@/services/medicineService";
import { makeMedicine, INITIAL_MEDICINES } from "@/utils/dummyData";
import { todayISO, uid } from "@/utils/helpers";

interface MedicineContextValue {
  medicines: Medicine[];
  isLoading: boolean;
  addMedicine: (payload: Partial<Medicine>) => Medicine;
  updateMedicine: (id: string, payload: Partial<Medicine>) => void;
  softDeleteMedicine: (id: string) => void;
  restoreMedicine: (id: string) => void;
  getById: (id: string) => Medicine | undefined;
}

const MedicineContext = createContext<MedicineContextValue | undefined>(undefined);

export function MedicineProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ["medicines"],
    queryFn: medicineService.list,
    staleTime: Infinity,
  });

  const [medicines, setMedicines] = useState<Medicine[]>(INITIAL_MEDICINES);

  // Seed local state from the query once it resolves (mock or real API).
  React.useEffect(() => {
    if (data) setMedicines(data);
  }, [data]);

  const addMedicine = (payload: Partial<Medicine>) => {
    const med = makeMedicine({
      ...payload,
      id: uid(),
      status: "active",
      createdAt: todayISO(),
      deleted: false,
    });
    setMedicines((prev) => [med, ...prev]);
    medicineService.create(med).catch(() => {
      /* mocked — no-op */
    });
    return med;
  };

  const updateMedicine = (id: string, payload: Partial<Medicine>) => {
    setMedicines((prev) => prev.map((m) => (m.id === id ? { ...m, ...payload } : m)));
    medicineService.update(id, payload).catch(() => {
      /* mocked — no-op */
    });
  };

  const softDeleteMedicine = (id: string) => {
    setMedicines((prev) =>
      prev.map((m) => (m.id === id ? { ...m, deleted: true, deletedAt: todayISO() } : m))
    );
    medicineService.softDelete(id).catch(() => {
      /* mocked — no-op */
    });
  };

  const restoreMedicine = (id: string) => {
    setMedicines((prev) => prev.map((m) => (m.id === id ? { ...m, deleted: false } : m)));
    medicineService.restore(id).catch(() => {
      /* mocked — no-op */
    });
  };

  const getById = (id: string) => medicines.find((m) => m.id === id);

  return (
    <MedicineContext.Provider
      value={{
        medicines,
        isLoading,
        addMedicine,
        updateMedicine,
        softDeleteMedicine,
        restoreMedicine,
        getById,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
}

export function useMedicineContext() {
  const ctx = useContext(MedicineContext);
  if (!ctx) throw new Error("useMedicineContext must be used within a MedicineProvider");
  return ctx;
}

// Convenience wrappers so call sites read naturally and toast feedback stays
// consistent across the app.
export function notifySuccess(title: string, detail?: string) {
  toast.success(detail ? `${title} — ${detail}` : title);
}
export function notifyError(title: string, detail?: string) {
  toast.error(detail ? `${title} — ${detail}` : title);
}
export function notifyInfo(title: string) {
  toast(title, { icon: "ℹ️" });
}
